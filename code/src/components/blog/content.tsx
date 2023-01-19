import { useEffect } from "react";
import Button from "../../../ACE/Button/Button";

interface Props {
  content: any;
}

// h1
const H1Renderer = (props: any) => {
  return <h1 className="flex text-2xl">{props.content}</h1>;
};

// h2
const H2Renderer = (props: any) => {
  return <h2 className="flex text-xl">{props.content}</h2>;
};

// h3
const H3Renderer = (props: any) => {
  return <h3 className="flex text-lg">{props.content}</h3>;
};

// h4
// h5
// h6
// p
const PRenderer = (props: any) => {
  return <p className="flex text-base">{props.content}</p>;
};

// callout
const CalloutRenderer = (props: any) => {
  return <div className="flex rounded-lg bg-gray-600 p-4">{props.content}</div>;
};

// bullet list
const BulletListItem = (props: any) => {
  return <li className="list-disc text-base">{props.content}</li>;
};

// quote
const QuoteRenderer = (props: any) => {
  return <div className="flex border-l-2 px-4 py-2">{props.content}</div>;
};

const PageContent: React.FC<Props> = (props) => {
  return (
    <>
      <div className="-mt-4 flex w-full flex-col space-y-4">
        {props.content.map((block: any) => {
          switch (block.type) {
            case "heading_1":
              return (
                <H1Renderer
                  key={block.id}
                  content={block.heading_1.rich_text[0]?.plain_text}
                />
              );
            case "heading_2":
              return (
                <H2Renderer
                  key={block.id}
                  content={block.heading_2.rich_text[0]?.plain_text}
                />
              );
            case "heading_3":
              return (
                <H3Renderer
                  key={block.id}
                  content={block.heading_3.rich_text[0]?.plain_text}
                />
              );
            case "paragraph":
              return (
                <PRenderer
                  key={block.id}
                  content={block.paragraph.rich_text[0]?.plain_text}
                />
              );
            case "callout":
              return (
                <CalloutRenderer
                  key={block.id}
                  content={block.callout.rich_text[0]?.plain_text}
                />
              );
            case "quote":
              return (
                <QuoteRenderer
                  key={block.id}
                  content={block.quote.rich_text[0]?.plain_text}
                />
              );
            case "bulleted_list_item":
              return (
                <BulletListItem
                  key={block.id}
                  content={block.bulleted_list_item.rich_text[0]?.plain_text}
                />
              );
            case "divider":
              return <hr key={block.id} />;
            default:
              break;
          }
        })}
      </div>
    </>
  );
};

export default PageContent;
