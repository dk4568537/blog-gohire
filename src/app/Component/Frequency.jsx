"use client";
import { Button, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const faqs = [
  {
    question: "How do I rent equipment on Rent Hire Go?",
    answer:
      "Simply create an account, browse the available products, and add the items you want to your cart. You can complete the rental process through our secure checkout, and we offer multiple payment options like credit cards and PayPal.",
  },
  {
    question: "What types of items can I rent?",
    answer:
      "Rent Hire Go offers a wide variety of items, including construction tools, event equipment, electronics, and more. Our diverse selection grows as more sellers join the platform, so you can find just about anything you need.",
  },
  {
    question: "How do I become a seller on Rent Hire Go?",
    answer:
      'To become a seller, click on the "Become a Seller" link, complete your profile, and submit the required KYC documents. Once approved, you can start listing your products and manage your rental business directly through our seller dashboard.',
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we prioritize your security. Rent Hire Go uses industry-standard encryption to ensure all transactions are safe. We also support trusted payment gateways like PayPal, Stripe, and major credit cards.",
  },
  {
    question: "Can I extend my rental period?",
    answer:
      "Absolutely! If you need to extend your rental, you can request an extension through your dashboard. Additional charges may apply depending on the rental agreement with the seller.",
  },
  {
    question: "What is the return policy for rented items?",
    answer:
      "Return policies vary by seller, but generally, items must be returned in the same condition they were rented. If you encounter any issues, our customer service team is here to help facilitate the return process.",
  },
];

const Frequency = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-col text-center">
          <p className="text-green-500 pb-2 sm:text-2xl">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h1 className="w-full text-white  sm:text-4xl mb-2 sm:mb-4 font-bold">
            Lorem ipsum dolor sit amet consectetur. A metus lacus.
          </h1>
          <p className="w-full text-white sm:w-[550px] text-xs sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Nunc tristique dui lobortis
            morbi. Pharetra suspendisse vestibulum ut semper sed feugiat. At mi
            diam.
          </p>
        </div>

        {/* Grid Layout Section */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center w-full  md:h-[558px] h-full bg-green-500 text-white rounded-lg p-8">
            <div className="border bg-white p-6 rounded-full mb-6">
              <Image
                width={50}
                height={50}
                src="/images/FrequencyImg.svg"
                alt="Frequency Image"
              />
            </div>
            <h1 className="pt-4 pb-4 font-bold text-xl">Have a Question?</h1>
            <p className="mb-8 text-center px-2">
              Our support team is ready to assist you with any inquiries. Reach
              out to us and get answers to all your VPN-related questions.
            </p>
            <Button
              size={"lg"}
              rightIcon={<RiArrowRightSLine className="text-lg" />}
              variant="solid"
            >
              Contact Us Now
            </Button>
          </div>

          {/* FAQ Section */}
          <div className="sm:col-span-1 lg:col-span-2 pb-8 px-3">
            <div className="text-[#161345] w-full flex flex-col">
              <div className="w-full rounded-2xl">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border rounded-xl bg-white px-4 mb-4"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer py-3"
                      onClick={() => handleToggle(index)}
                    >
                      <h2 className="text-sm md:text-xl py-3 ">{faq.question}</h2>
                      <button>
                        {openIndex === index ? (
                          <IconButton
                            isRound={true}
                            variant="solid"
                            colorScheme="green"
                            aria-label="Expand"
                            fontSize="20px"
                            icon={<SlArrowUp />}
                          />
                        ) : (
                          <IconButton
                            isRound={true}
                            variant="solid"
                            colorScheme="green"
                            aria-label="Collapse"
                            fontSize="20px"
                            icon={<SlArrowDown />}
                          />
                        )}
                      </button>
                    </div>
                    {openIndex === index && (
                      <div className="py-4">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frequency;
