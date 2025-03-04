import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { verifyUser } from "../../services/authApi";

function VerifyUser() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const sessionId = searchParams.get("sessionId");
    const token = searchParams.get("t");

    const activateAccount = async () => {
        if (!sessionId && !token) return;
        const res = await verifyUser({
            sessionId,
            t: token,
        });

        if (res.success) {
            setTimeout(() => {
                setIsLoading(false);
                navigate("/login");
            }, 2000);
        }
    };

    useEffect(() => {
        activateAccount();
    }, [sessionId, token]);
    return (
        <div>
            {isLoading ? (
                <div className="d-flex flex-column align-items-center">
                    <HashLoader />
                    <p className="fs-4 mt-4 text-danger">
                        Please do not go back or refresh the browser.
                    </p>
                </div>
            ) : null}
        </div>
    );
}

export default VerifyUser;
