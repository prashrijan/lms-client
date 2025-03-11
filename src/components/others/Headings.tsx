import { HeadingsProps } from "../../types/types";

function Headings({ pageTitle }: HeadingsProps) {
    return (
        <div>
            <div className="p-2">
                <h1>{pageTitle}</h1>
            </div>
            <hr />
        </div>
    );
}

export default Headings;
