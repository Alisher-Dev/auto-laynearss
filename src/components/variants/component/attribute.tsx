import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { model } from "@/data/data";
import { IAttribute } from "@/types/type";

export function AttributeVariant({
  handleAttribute,
  ids,
}: {
  handleAttribute: (e: ChangeEvent<HTMLInputElement>, attrId: number) => void;
  ids: number[];
}) {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [attributes, setAttribute] = useState<IAttribute[]>([]);

  useEffect(() => {
    if (id) {
      model
        .find((m) => m.id === +id)
        .variants.map((vari) =>
          vari.values.map((value) => {
            if (value) {
              setAttribute((att) => {
                if (att.find((a) => a?.id === value?.attribute?.id)) return att;
                return [...att, value?.attribute];
              });
            }
          })
        );
    }
  }, [id]);

  return (
    <>
      <div className="w-full sm:w-[30%] border-b-1 sm:border-b-0 sm:border-r-1 border-gray-400 sm:h-[500px] p-5 flex flex-col gap-2">
        {attributes?.map((att, index) => (
          <span key={index} className="flex gap-3 items-center">
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              className="size-4.5"
              onChange={(e) => handleAttribute(e, att?.id)}
              checked={ids.includes(att?.id)}
            />
            <label htmlFor={`checkbox-${index}`} className="font-medium">
              {att?.name?.[i18n.language]}
            </label>
          </span>
        ))}
      </div>
    </>
  );
}
