/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";

import styles from "./styles.module.css";

//-------------------------------------------------------/
////// Import the component you need in scope
import {
  Motor,
  Button,
  Filter,
  CurrentSelections,
  SmartHeading,
  Search,
  Pie,
  Bar,
  Column,
  Line,
  KPI,
  Grid,
  Box,
  Sidebar,
  Modal,
  Table,
  useSidebar,
  useModal,
} from "@motor-js/core";

/*
host: 'sense-demo.qlik.com',
    secure: true,
    port: 443,
    prefix: '/',
    appId: '133dab5d-8f56-4d40-b3e0-a6b401391bde',

const config = {
  host: "localhost",
  secure: false,
  port: 19077,
  prefix: "",
  // appId: "bd335164-4640-4a3f-970d-2fef039c39bf", // Luke
  appId: "c2a87f96-e112-44cd-b9f3-2f9db1b0a700", // Alan
  //appId: "bd335164-4640-4a3f-970d-2fef039c39bf", // Alan
};

  //c2a87f96-e112-44cd-b9f3-2f9db1b0a700
  //bd335164-4640-4a3f-970d-2fef039c39bf
  //appId: "de8b2fd6-f9d3-48c3-878b-849317369bfb", // Alan

*/

const config = {
  host: "sense-demo.qlik.com",
  secure: true,
  port: 443,
  prefix: "",
  appId: "372cbc85-f7fb-4db6-a620-9a5367845dce",
};

/*
//-------------------------------------------------------/
////// Object with components I need in scope
const SCOPE = {
  Motor,
  Button,
  Filter,
  CurrentSelections,
  SmartHeading,
  KPI,
  config,
  Grid,
  Box,
  Sidebar,
  Modal,
  Table,
  useSidebar,
  useModal,
  Search,
  Pie,
  Bar,
  Column,
  Line,
};


export default {
  code: (props) => {
    const { children } = props;
    if (typeof children === "string") {
      if (!children.includes("\n")) {
        return <code {...props} />;
      }
      return <CodeBlock {...props} scope={SCOPE} />;
    }
    return children;
  },
  a: (props) => {
    if (/\.[^./]+$/.test(props.href)) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...props} />;
    }
    return <Link {...props} />;
  },
  pre: (props) => <div className={styles.mdxCodeBlock} {...props} />,
  h1: Heading("h1"),
  h2: Heading("h2"),
  h3: Heading("h3"),
  h4: Heading("h4"),
  h5: Heading("h5"),
  h6: Heading("h6"),
};

*/
