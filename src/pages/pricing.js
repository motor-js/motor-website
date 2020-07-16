import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { PlanCard } from "../components/PlanCard";

const pricing = (props) => {
    const prices = [
        {
            id: 0,
            title: "NON COMMERCIAL",
            perUsers: "Try before you buy, or use for non-profit",
            fee: "Free",
            isMostPopular: false,
            actionLink: "https://identity.amphoradata.com/Register",
            actionName: "Get Started",
            descriptions: [
                { text: "Access to full library", access: true },
                { text: "Support via GitHub", access: true },
                { text: "For use in non-commercial projects", access: true },
            ],
        },
        {
            id: 2,
            title: "TEAM",
            perUsers: "Internal Applications. Up to 5 developers",
            fee: "£580 per developer, per year",
            isMostPopular: false,
            actionLink: "mailto:contact@amphoradata.com",
            actionName: "Contact Us",
            descriptions: [
                { text: "Access to full library", access: true },
                { text: "Email support", access: true },
                { text: "Max 5 developers", access: true },
                { text: "Internal applications", access: true },
                { text: "Priority support", access: false  },
                { text: "Access to full source code", access: false },
                { text: "Distribute to third parties", access: false },
            ],
        },
        {
            id: 1,
            title: "ENTERPRISE",
            perUsers: "Internal Applications, no developer limit",
            fee: "Contact us for pricing",
            isMostPopular: false,
            actionLink: "mailto:contact@amphoradata.com",
            actionName: "Contact Us",
            descriptions: [
                { text: "Access to full library", access: true },
                { text: "Email support", access: true },
                { text: "Unlimited developers", access: true },
                { text: "Internal applications", access: true },
                { text: "Priority support", access: true },
                { text: "Access to full source code", access: true },
                { text: "Distribute to third parties", access: false },
            ],
        },
        {
            id: 2,
            title: "OEM",
            perUsers: "Distribute the library to third parties",
            fee: "Contact us for pricing",
            isMostPopular: false,
            actionLink: "mailto:contact@amphoradata.com",
            actionName: "Contact Us",
            descriptions: [
                { text: "Access to full library", access: true },
                { text: "Email support", access: true },
                { text: "Unlimited developers", access: true },
                { text: "Internal applications", access: true },
                { text: "Priority support", access: true },
                { text: "Access to full source code", access: true },
                { text: "Distribute to third parties", access: true },
            ],
        },
    ];
    return (
        <Layout title="Pricing">
            <div
                className={classnames(
                    "container container--fluid",
                    styles.presentationContainer
                )}
            >
                <div className='heading'>Choose the plan that’s right for your team</div>
                <div
                    className={classnames(
                        "mt-4 mr-2 row",
                        styles.justifyContentCenter
                    )}
                >
                    {prices.map((price) => (
                        <PlanCard
                            key={price.id}
                            isMostPopular={price.isMostPopular}
                            plan={price}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default pricing;