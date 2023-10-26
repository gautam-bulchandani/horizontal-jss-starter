import {
  ComponentRendering,
  Field,
  Image,
  ImageField,
  Placeholder,
  RichText,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import type { Feature } from '../../../.generated/templates/Feature.www.model';
import Link from 'next/link';

export type leprechaon = Feature.www.Sitecore.templates.Feature.www.Tiles.Fields.Tile;

interface Fields {
  Destinations: TileData[];
  Type: { [key: string]: string };
  Attractions: TileData[];
}

interface TileFields {
  TileImage: ImageField;
  Heading: Field<string>;
  ShortDescription: Field<string>;
}
type TileData = {
  fields: TileFields;
  url: string;
};

type TileProps = {
  params: { [key: string]: string };
  fields: leprechaon;
  rendering: ComponentRendering;
};

export const Default = (props: TileProps) => {
  console.log(props.fields.Type.value);
  if (props.fields.Type.value === 'Destination') {
    return (
      <section class="text-gray-600 body-font">
        {props.fields.Destinations!.map((dest) => (
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image field={dest.fields.TileImage.value?.src} />
                <div
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  style={{
                    backgroundImage: `url(${dest.fields.TileImage.value?.src})`,
                  }}
                  alt="content"
                ></div>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  <Text field={dest.fields.Heading} />
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>

                <RichText field={dest.fields.ShortDescription}></RichText>
              </div>
            </div>
          </div>
        ))}

        <Placeholder name="headless-tile" rendering={props.rendering} />
      </section>
    );
  }
};
// export default Tile;

export const DefaultWithText = () => {
  return <h1>Hello DefaultWithText</h1>;
};
