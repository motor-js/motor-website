import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_fglr7wayGL7IzaPZjNmVSVHF');

//  Live key
//  pk_live_ccYJL1tf9wYKI5cZBFSQ0YGE
//  Live Price
//  price_1GxUxrIhnuq3JpMg5tlxY5jU


const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_1GxVYzIhnuq3JpMgK9lnqpqn", quantity: 1 }],
    mode: "subscription",
    successUrl: `http://localhost:3000/success/`,
    cancelUrl: `http://localhost:3000/pricing/`,
  })
  if (error) {
    console.warn("Error:", error)
  }
}

const Pricing = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Motor homepage"
    >
      <div>Hello Pricing</div>
      <button onClick={redirectToCheckout}>Buy Product</button>
    </Layout>
  )
}

export default Pricing
