import { ComponentRendering } from '@sitecore-jss/sitecore-jss-nextjs';

import type { Feature } from '../../../.generated/templates/Feature.www.model';

export type leprechaon = Feature.www.Sitecore.templates.Feature.www.Navigation.Fields;
type NavigationProps = {
  params: { [key: string]: string };
  fields: leprechaon;
  rendering: ComponentRendering;
};
const WWWNavigation = (props: NavigationProps) => {
  if (props === null || props === undefined) return <></>;
  return (
    <header class="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={props.fields.HeaderLogo.value?.src}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          ></img>
          <span className="ml-3 text-xl">{props.fields.HeaderText.value}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {props.fields.HeaderLinks!.map((dest) => (
            <a className="mr-5 hover:text-gray-900">{dest.name}</a>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default WWWNavigation;
