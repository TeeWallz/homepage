import React, {memo} from "react";

export const LinkGroup = memo(function LinkGroup({ group }) {

    return (
        <React.Fragment>
            <h1>{group.name}</h1>
            {group.items.map((link) => (
                <h2>{link.title}</h2>
            ))}
        </React.Fragment>
    )
})