import {useEffect} from "react";

interface Props {
  content: any;
}

// h1
const H1Renderer = (props: any) => {
  return (
    <h1 className="flex text-2xl">
      {props.content}
    </h1>
  )
}

// h2
const H2Renderer = (props: any) => {
  return (
    <h2 className="flex text-xl">
      {props.content}
    </h2>
  )
}

// h3
const H3Renderer = (props: any) => {
  return (
    <h3 className="flex text-lg">
      {props.content}
    </h3>
  )
}

// h4
// h5
// h6
// p
const PRenderer = (props: any) => {
  return (
    <p className="flex text-base">
      {props.content}
    </p>
  )
}

// callout
const CalloutRenderer = (props: any) => {
  return (
    <div className="flex p-4 bg-gray-600 rounded-lg">
      {props.content}
    </div>
  )
}

// bullet list
const BulletListItem = (props: any) => {
  return (
    <li className="text-base">
      {props.content}
    </li>
  )
}

const PageContent: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(props.content)
  })

  return (
    <>
      <div className="flex flex-col space-y-4 w-full">
        {
          props.content.map((block: any) => {
            switch (block.type) {
              case "heading_1":
                return <H1Renderer key={block.id} content={block.heading_1.rich_text[0]?.plain_text}/>
              case "heading_2":
                return <H2Renderer key={block.id} content={block.heading_2.rich_text[0]?.plain_text}/>
              case "heading_3":
                return <H3Renderer key={block.id} content={block.heading_3.rich_text[0]?.plain_text}/>
              case "paragraph":
                return <PRenderer key={block.id} content={block.paragraph.rich_text[0]?.plain_text}/>
              case "callout":
                return <CalloutRenderer key={block.id} content={block.callout.rich_text[0]?.plain_text} />
              case "bulleted_list_item":
                return <BulletListItem key={block.id} content={block.bulleted_list_item.rich_text[0]?.plain_text} />
              case "divider":
                return <hr key={block.id} />
              default:
                break;
            }
          })
        }
      </div>
    </>
  )
}

export default PageContent;
