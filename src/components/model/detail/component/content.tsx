import { useTranslation } from "react-i18next";
import { Controller } from "@/helpers/contain";
import { IContent } from "@/types/type";

export function ContentDetail({ content }: { content: IContent }) {
  const { i18n } = useTranslation();

  return (
    <>
      {content && (
        <div className="bg-gray-100 py-10">
          <Controller>
            <div
              className="text-[#05141F] font-light space-y-5
							[&_h1]:text-4xl [&_h1]:font-bold
							[&_h2]:text-3xl [&_h2]:font-semibold
							[&_h3]:text-2xl [&_h3]:font-semibold
							[&_h4]:text-xl [&_h4]:font-semibold
							[&_h5]:text-lg [&_h5]:font-medium
							[&_h6]:text-base [&_h6]:font-medium
							[&_p]:text-lg [&_p]:leading-relaxed
							[&_a]:text-blue-600 [&_a]:underline hover:[&_a]:text-blue-800
							[&_ul]:list-disc [&_ul]:pl-6
							[&_ol]:list-decimal [&_ol]:pl-6
							[&_li]:my-2
							[&_strong]:font-semibold
							[&_u]:underline
							[&_hr]:border-t [&_hr]:border-gray-300 [&_hr]:my-6
						"
              dangerouslySetInnerHTML={{ __html: content[i18n.language] }}
            />
          </Controller>
        </div>
      )}
    </>
  );
}
