import React, {memo} from "react";

export const SimplePage = memo(function SimplePage({data}) {
    return data.items.map((group) => (
            <div className="w3-container w3-cell w3-mobile">
                <ul className="w3-ul w3-center">
                    <li>{group.name}</li>
                    <ul>
                     {group.items.map((link) => (
                        <li>
                            <a target="_blank" rel="noopener" href={link.url}>{link.title}</a>
                        </li>
                    ))}
                    </ul>
                </ul>
            </div>
        ));
})
