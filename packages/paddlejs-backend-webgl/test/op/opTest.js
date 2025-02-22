import { Runner } from '@paddlejs/paddlejs-core';
import { glInstance } from '../../src/index';

const opName = 'prior_box';
const modelDir = '/test/op/data/';
const modelPath = `${modelDir}${opName}.json`;


async function run() {
    const runner = new Runner({
        modelPath,
        feedShape: {
            fw: 6,
            fh: 9
        },
        needPreheat: false
    });
    await runner.init();
    const executeOP = runner.weightMap[0];
    runner.executeOp(executeOP);
    const res = await glInstance.read();
    console.log(res);
}

run();
