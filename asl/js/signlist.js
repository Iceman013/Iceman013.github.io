import { Sign } from "./sign.js";

export const SignList = [
    new Sign(
        ["day"],
        ["time","first 100"],
        ["today","tomorrow","yesterday","night","week","weekend","month","year"],
        ["day-version-1.gif"]
    ),

    new Sign(
        ["all day"],
        ["time","first 100"],
        ["today","tomorrow","yesterday","night","week","weekend","month","year"],
        ["day-all.gif"]
    ),

    new Sign(
        ["mom","mother"],
        ["family","first 100"],
        ["dad","grandma"],
        ["mom.gif","mother-version-1-side-view.gif","mother-version-2.gif","mother-version-2-side-view.gif","mother-version-3.gif","mother-version-3-side-view.gif"]
    ),

    new Sign(
        ["dad","father"],
        ["family","first 100"],
        ["mom","grandpa"],
        ["dad-fast.gif"]
    ),

    new Sign(
        ["boy","male"],
        ["people","first 100"],
        ["girl"],
        ["boy.gif"]
    ),

    new Sign(
        ["girl","female"],
        ["people","first 100"],
        ["boy"],
        ["girl.gif"]
    ),

    new Sign(
        ["marriage","marry","married"],
        ["first 100"],
        [],
        ["MARRIAGE_marry_married.gif"]
    ),

    new Sign(
        ["husband"],
        ["people","first 100"],
        ["wife"],
        ["husband.gif"]
    ),

    new Sign(
        ["wife"],
        ["people","first 100"],
        ["husband"],
        ["wife.gif"]
    ),

    new Sign(
        ["brother"],
        ["family","first 100"],
        ["sister"],
        ["brother.gif"]
    ),

    new Sign(
        ["sister"],
        ["family","first 100"],
        ["brother"],
        ["sister.gif"]
    ),

    new Sign(
        ["grandma", "grandmother"],
        ["family","first 100"],
        ["grandpa"],
        ["grandma.gif"]
    ),

    new Sign(
        ["grandpa", "grandfather"],
        ["family","first 100"],
        ["grandma"],
        ["grandpa.gif"]
    ),

    new Sign(
        ["aunt"],
        ["family","first 100"],
        ["uncle"],
        ["aunt.gif"]
    ),

    new Sign(
        ["uncle"],
        ["family","first 100"],
        ["aunt"],
        ["uncle.gif"]
    ),

    new Sign(
        ["baby"],
        ["people","first 100"],
        [],
        ["baby.gif"]
    ),

    new Sign(
        ["single"],
        ["first 100"],
        ["divorce"],
        ["single.gif"]
    ),

    new Sign(
        ["divorce"],
        ["first 100"],
        ["single"],
        ["divorce.gif","divorce-unmarry.gif"]
    ),

    new Sign(
        ["separate"],
        ["first 100"],
        ["divorce"],
        ["separate.gif"]
    ),
];