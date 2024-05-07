import Container from "@/components/ui/Container";
import React from "react";

const Education = () => {
  return (
    <div className="py-20">
      <div className="mt-10 flex justify-center items-center flex-col">
        <p className="text-primary-foreground font-bold mb-5 text-xl sm:text-2xl">
          Education
        </p>
        <h1 className=" text-foreground text-2xl  sm:text-4xl mb-2 font-bold place-items-start">
          My Educational Degrees
        </h1>
        <div className="w-48 h-1 bg-secondary rounded mx-auto"></div>
      </div>
      <Container>
        {/* <!-- component --> */}
        <div className="flex justify-center items-center mt-10 md:-mt-10">
          <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6 ">
              <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
                <div className="w-full mx-auto">
                  {/* <!-- Vertical Timeline #1 --> */}
                  <div className="-my-6">
                    {/* <!-- Item #1 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      {/* <!-- Purple label --> */}
                      <div className="font-medium text-primary-foreground mb-1 sm:mb-0">
                        BBA in Accounting and Information Systems
                      </div>
                      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute -left-5 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-8 mb-3 sm:mb-0 text-primary-foreground bg-purple-200 rounded-full">
                          2021 - Running
                        </time>
                        <div className="text-xl font-bold text-slate-400">
                          Kabi Nazrul Govt. College
                        </div>
                      </div>
                      {/* <!-- Content --> */}
                      <div className="text-foreground">
                        Name of Department : Accounting
                        <br />
                        Session : 2020-2021
                        <br />
                        CGPA : Running
                      </div>
                    </div>

                    {/* <!-- Item #2 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      {/* <!-- Purple label --> */}
                      <div className="font-medium text-primary-foreground mb-1 sm:mb-0">
                        Higher Secondary Certificate
                      </div>
                      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute -left-5 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-8 mb-3 sm:mb-0 text-primary-foreground bg-purple-200 rounded-full">
                          2018-2020
                        </time>
                        <div className="text-xl font-bold text-slate-400">
                          CCER Model College
                        </div>
                      </div>
                      {/* <!-- Content --> */}
                      <div className="text-foreground">
                        Group : Business Studies <br />
                        Year of Exam : 2020 <br />
                        Grade Achieved : GPA 4.48 Out of 5.00 scales.
                      </div>
                    </div>

                    {/* <!-- Item #3 --> */}
                    <div className="relative pl-8 sm:pl-32 py-6 group">
                      {/* <!-- Purple label --> */}
                      <div className="font-medium text-primary-foreground mb-1 sm:mb-0">
                        Secondary School Certificate
                      </div>
                      {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
                      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute -left-5 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-8 mb-3 sm:mb-0 text-primary-foreground bg-purple-200 rounded-full">
                          2017-2018
                        </time>
                        <div className="text-xl font-bold text-slate-400">
                          Bangladesh Bank High School
                        </div>
                      </div>
                      {/* <!-- Content --> */}
                      <div className="text-foreground">
                        Group : Business Studies <br />
                        Year of Exam : 2018 <br />
                        Grade Achieved : GPA 4.17 Out of 5.00 scales.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Education;
