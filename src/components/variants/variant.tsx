import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Controller } from "@/helpers/contain";
import { AttributeVariant } from "./component/attribute";
import { HeaderVariant } from "./component/header";
import { VariantValue } from "./component/varinatValue";
import { model } from "@/data/data";
import { IVariants } from "@/types/type";

export function Variant() {
  const [variants, setVariants] = useState<IVariants[]>([]);
  const [ids, setIds] = useState<number[]>([]);
  const { id } = useParams();

  const handleAttribute = (
    e: ChangeEvent<HTMLInputElement>,
    attrId: number
  ) => {
    if (e.target.checked) {
      setIds((arr) => [...arr, attrId]);
    } else {
      setIds((arr) => arr.filter((el) => el !== attrId));
    }
  };

  useEffect(() => {
    if (!id) return;

    const modelItem = model.find((m) => m.id === +id);
    if (!modelItem) return;

    if (id && ids.length === 0) {
      setVariants(modelItem.variants);
      return;
    }

    // 🔎 Фильтруем варианты, у которых есть хотя бы один аттрибут из выбранных
    const filtered = modelItem.variants.filter((variant) =>
      variant.values.some((value) => ids.includes(value.attribute.id))
    );

    // 🧼 Убираем дубли по id варианта
    const uniqueVariants = Array.from(
      new Map(filtered.map((v) => [v.id, v])).values()
    );

    setVariants(uniqueVariants);
  }, [id, ids]);

  return (
    <div className="mt-22">
      <HeaderVariant />
      <div className="border-t-1 border-gray-400 mt-5 flex flex-col sm:flex-row items-start">
        <Controller className="flex flex-col sm:flex-row items-start w-full">
          <AttributeVariant handleAttribute={handleAttribute} ids={ids} />
          <VariantValue data={variants} />
        </Controller>
      </div>
    </div>
  );
}
