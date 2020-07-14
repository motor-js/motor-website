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
import { Motor, Button, Pie, Bar, Column, Line } from "motor-ui";

const config = {
  host: "localhost",
  secure: false,
  port: 19077,
  prefix: "",
  // appId: 'bd335164-4640-4a3f-970d-2fef039c39bf', // Luke
  appId: "de8b2fd6-f9d3-48c3-878b-849317369bfb", // Alan
  //appId: "bd335164-4640-4a3f-970d-2fef039c39bf", // Alan
};

//-------------------------------------------------------/
////// Object with components I need in scope
const SCOPE = {
  Motor,
  Button,
  Filter,
  CurrentSelections,
  Search,
  Pie,
  Bar,
  Column,
  Line,
  config,
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
