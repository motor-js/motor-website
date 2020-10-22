import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { PlanCard } from "../components/PlanCard";

const enterprise = (props) => {
  const prices = [
    {
      id: 2,
      title: "ENTERPRISE SUPPORT",
      fee: "Contact us for pricing",
      isMostPopular: true,
      actionName: "Contact Us",
      descriptions: [
        { text: "Fully Supported Components", access: true },
        { text: "Chat support", access: true },
        { text: "Deployment Assistance", access: true },
      ],
    }
  ];
  return (
    <Layout title="Pricing">
      <div
        className={classnames(
          "container container--fluid",
          styles.presentationContainer
        )}
      >
        <div className="heading">
          Need Enterprise Support? Contact us below
        </div>
        <div styles={{ padding: '0 5rem'}}>
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

export default enterprise;
