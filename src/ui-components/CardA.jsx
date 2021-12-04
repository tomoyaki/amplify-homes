/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardA(props) {
  const { home, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      borderRadius="25px"
      gap="16px"
      width="412px"
      position="relative"
      justifyContent="center"
      direction="column"
      height="308px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Image
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        borderRadius="25px"
        shrink="0"
        src={home?.image_url}
        width="382px"
        position="relative"
        height="206px"
        {...getOverrideProps(overrides, "Flex.Image[0]")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        alignSelf="stretch"
        position="relative"
        shrink="0"
        gap="8px"
        direction="column"
        {...getOverrideProps(overrides, "Flex.Flex[0]")}
      >
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          letterSpacing="0.15px"
          justifyContent="flex-start"
          fontFamily="Helvetica"
          width="382px"
          fontSize="30px"
          lineHeight="24px"
          position="relative"
          fontWeight="700"
          direction="column"
          children={home?.address}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[0]")}
        ></Text>
        <Text
          padding="0px 0px 0px 0px"
          alignSelf="stretch"
          color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
          textAlign="left"
          shrink="0"
          display="flex"
          justifyContent="flex-start"
          fontFamily="Inter"
          width="382px"
          fontSize="14px"
          lineHeight="24px"
          position="relative"
          fontWeight="400"
          direction="column"
          children={`${"Price: $"}${home?.price}${"/night"}`}
          {...getOverrideProps(overrides, "Flex.Flex[0].Text[1]")}
        ></Text>
      </Flex>
    </Flex>
  );
}
