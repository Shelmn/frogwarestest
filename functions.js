let GeneralQuestInfo = require('./data/GeneralQuestsInfo');
let mainInfo = require('./data/MainPageInfo');
let finishedLeafs = require('./data/FinishedQuestsLeafs');
let currentQuest;

let functions = {
    getQuestInfo: function (al) {
        for(let i = 0; i < GeneralQuestInfo.length; i++) {
            if(GeneralQuestInfo[i].alias===al) {
                currentQuest = GeneralQuestInfo[i];
                return currentQuest;
            }
        }
    },
    getLeafs: function () {
        let result = [];
        let leafs = currentQuest.pathway.leafs;
        for (let i = 0; i < leafs.length; i++) {
            for (let j = 0; j < finishedLeafs.length; j++) {
                if (leafs[i] === finishedLeafs[j].name) {
                    result.push(true);
                    break;
                }
                if(j===finishedLeafs.length-1 && leafs[i] !== finishedLeafs[j].name) result.push(false);
            }

        }
        return result;
    },
    availableQuest: function (alias) {
        for(let i = 0; i < mainInfo.length; i++) {
            if(mainInfo[i].alias === alias && mainInfo[i].status !== "NO_DATA") return true;
        }
        return false;
    }
};


module.exports = functions;