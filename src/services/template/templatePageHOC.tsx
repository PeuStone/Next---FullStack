import Head from "next/head"
import type { TemplateConfig } from "./withTemplateConfig"

interface TemplatePageHOCProps {
  title?: string
}

export default function templatePageHOC(
  Component: (props: any) => JSX.Element,
  TemplatePageHOCProps: TemplatePageHOCProps = {}) {
  return function WrappedComponent(props: { templateConfig: TemplateConfig }) {
    return (
      <>
        <Head>
          <title>
            {TemplatePageHOCProps?.title
              ? `${TemplatePageHOCProps.title} | ${props.templateConfig.site.title}`
              : props.templateConfig.site.title}
          </title>
        </Head>
        <Component {...props} />
      </>
    )
  }
}
