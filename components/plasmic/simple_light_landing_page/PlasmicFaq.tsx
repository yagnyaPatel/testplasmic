// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ggwJQg3i8ZQLYrz8HozuXG
// Component: rkkYiBMMicPIIP
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import BaseCard from "../../BaseCard"; // plasmic-import: mnynovl5iEBEgL/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: ggwJQg3i8ZQLYrz8HozuXG/projectcss
import sty from "./PlasmicFaq.module.css"; // plasmic-import: rkkYiBMMicPIIP/css

export type PlasmicFaq__VariantMembers = {};

export type PlasmicFaq__VariantsArgs = {};
type VariantPropType = keyof PlasmicFaq__VariantsArgs;
export const PlasmicFaq__VariantProps = new Array<VariantPropType>();

export type PlasmicFaq__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFaq__ArgsType;
export const PlasmicFaq__ArgProps = new Array<ArgPropType>("children", "slot");

export type PlasmicFaq__OverridesType = {
  root?: p.Flex<typeof BaseCard>;
};

export interface DefaultFaqProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

function PlasmicFaq__RenderFunc(props: {
  variants: PlasmicFaq__VariantsArgs;
  args: PlasmicFaq__ArgsType;
  overrides: PlasmicFaq__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <BaseCard
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__vJvLm)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__timyk)}>
          <div className={classNames(projectcss.all, sty.freeBox__lQjxl)}>
            {p.renderPlasmicSlot({
              defaultContents: "Are there long-term contracts?",
              value: args.children,
              className: classNames(sty.slotTargetChildren)
            })}
          </div>
        </div>

        {p.renderPlasmicSlot({
          defaultContents:
            "Yes! You can. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </p.Stack>
    </BaseCard>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof BaseCard;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFaq__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFaq__VariantsArgs;
    args?: PlasmicFaq__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFaq__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFaq__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFaq__ArgProps,
      internalVariantPropNames: PlasmicFaq__VariantProps
    });

    return PlasmicFaq__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaq";
  } else {
    func.displayName = `PlasmicFaq.${nodeName}`;
  }
  return func;
}

export const PlasmicFaq = Object.assign(
  // Top-level PlasmicFaq renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFaq
    internalVariantProps: PlasmicFaq__VariantProps,
    internalArgProps: PlasmicFaq__ArgProps
  }
);

export default PlasmicFaq;
/* prettier-ignore-end */
