const Outreach = require('../models/Outreach')
const Client = require('../models/Client')
const mockUser = require('../config/mockUser.json')

module.exports = {
    getStats: async function (req, res) {
        const userId = process.env.MOCK_USER === "true" ? mockUser._id : req.user.id;
        try {
            // Helper function for counting documents
            const countDocs = async (condition) => {
                return await Outreach.countDocuments({ user: userId, ...condition });
            };
            const [totalClients, totalOutreach, answeredOutreach, unansweredOutreach, clientsSaidYes, clientsSaidNo, proposalsSent, contractsSent, sitesCompleted, paid] = await Promise.all([
                Client.countDocuments({ user: userId }),
                countDocs({ 'contactDetails.contacted': true }),
                countDocs({ 'responseDetails.responded': true }),
                countDocs({ 'responseDetails.responded': false }),
                countDocs({ 'responseDetails.responseYes': true }),
                countDocs({ 'responseDetails.responseYes': false }),
                countDocs({ 'clientWork.proposalSent': true }),
                countDocs({ 'clientWork.contractSent': true }),
                countDocs({ 'clientWork.siteCompleted': true }),
                countDocs({ 'clientWork.paid': true })
            ]);

            res.json({
                profileStats: {
                    totalClients,
                    totalOutreach,
                    answeredOutreach,
                    unansweredOutreach,
                    clientsSaidYes,
                    clientsSaidNo,
                    proposalsSent,
                    contractsSent,
                    sitesCompleted,
                    paid
                }
            });

        } catch (error) {
            console.log(error)
            res.send(500)
        }
    },
}
