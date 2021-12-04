/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import CardA from "./CardA";
import { Flex } from "@aws-amplify/ui-react";
export default function CurvedCardA(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="0px 0px 0px 0px"
      position="relative"
      gap="0"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <CardA
        shrink="0"
        display="flex"
        {...getOverrideProps(overrides, "Flex.CardA[0]")}
      ></CardA>
    </Flex>
  );
}
