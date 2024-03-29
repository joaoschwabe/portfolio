import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

import alfbtchild from "../../public/assets/projetos/alfbt-child2.jpg";

const AlfbtChild = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
                <Image
                    className="absolute"
                    layout="fill"
                    src={alfbtchild}
                    style={{ objectFit: "contain" }}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">ALFBT Child</h2>
                    <h3>React Native / realm / Expo</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Projeto</p>
                    <h3 className="text-xl">Resumo</h3>
                    <p>
                        Trabalho de conclusão de curso do curso de Informática
                        do CIMOL. O aplicativo foi desenvolvido em React Native
                        utilizando o banco de dados realm. O objetivo do
                        aplicativo é auxiliar os professores ao alfabetizar os
                        alunos na sala de aula.
                    </p>
                    <a
                        href="https://github.com/joaoschwabe/alfbt-child"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="px-8 py-2 mt-4 mr-8">Código</button>
                    </a>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-md shadow-slate-500 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Tecnologias
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> React
                                Native
                            </p>

                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />{" "}
                                JavaScript
                            </p>
                            <p className="py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> realm
                            </p>
                        </div>
                    </div>
                </div>
                <Link href="/#projetos">
                    <p className="underline cursor-pointer">Voltar</p>
                </Link>
            </div>
        </div>
    );
};

export default AlfbtChild;
