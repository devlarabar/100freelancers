"use client";
import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function ClienCardDropdown() {
	return (
		<div className="dropdown dropdown-right  text-secondary">
			<label tabIndex={0} className="">
				<EllipsisHorizontalIcon className="h-8 w-8 cursor-pointer stroke-1 text-accent hover:stroke-2" />
			</label>
			<ul
				tabIndex={0}
				className="dropdown-menu-small"
			>
				<li>
					<a>Add Outreach</a>
				</li>
				<li>
					<a>Edit</a>
				</li>
				<li>
					<a>Archive</a>
				</li>
				<li>
					<a>Delete</a>
				</li>
			</ul>
		</div>
	);
}

export default ClienCardDropdown;
