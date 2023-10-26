import React from 'react';
import type { Feature } from '../../../.generated/templates/Feature.www.model';

export type leprechaon = Feature.www.Sitecore.templates.Feature.www.Logo.Fields;
type LogoProps = {
  fields: leprechaon;
};

export const Default = (props: LogoProps) => {
  if (props === null || props === undefined) return <></>;
  return (
    <>
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
          src={props.fields.Image.value?.src}
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        ></img>
        <span className="ml-3 text-xl">{props.fields.ImageCaption.value}</span>
      </a>
    </>
  );
};
