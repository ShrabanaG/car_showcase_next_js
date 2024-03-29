"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const handleUpdateParams = (e: { title: string; value: string }) => {
    console.log(title);
    console.log(e.value);
    const serachParams = new URLSearchParams(window.location.search);
    serachParams.set(title, e.value.toLowerCase());
    const newPath = `${window.location.pathname}?${serachParams.toString()}`;
    router.push(newPath);
  };

  const handleValueChange = (e: any) => {
    setSelected(e);
    handleUpdateParams(e);
  };

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={handleValueChange}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => {
                return (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      `relative cursor-default select-none ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    style={{ padding: "8px" }}
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option.title}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
