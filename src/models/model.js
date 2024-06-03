const mongoose = require('mongoose')

const User = mongoose.model("user", {
    username: String,
    password: String,
    roles: String,
})

const Leito = mongoose.model("leito", {
    name: String,
    age: String,
    plan: String,
    obs: String,
    nota: Boolean,
    conc: Boolean,
    pres: Boolean,
    exa: Boolean,
    tev: Boolean,
    int: Boolean,
    hour: String,
    stats: String,
    room: String,
})

const Patient = mongoose.model('Patient', {
    name: String,
    age: String,
    plan: String,
    box: String,
    room: String,
    stats: String,
    active: Boolean,
    alta: String,
    dataMed: {
        src: String,
        obs: String,
        nota: Boolean,
        conc: Boolean,
        pres: Boolean,
        exa: Boolean,
        tev: Boolean,
        int: Boolean,
        spec: String,
    },
    dataEnf: {
        obs: String,
        test1: Boolean,
        test2: Boolean,
        test3: Boolean,
        test4: Boolean,
        test5: Boolean,
    },
    dataTime: {
        timeCreate: Date,
        timeAna: Date,
        timeAlta: Date,
        timeInt: Date,
        timeArchive: Date,
    },
    dataActive: {
        activeMed: Boolean,
        activeEnf: Boolean,
        activeRec: Boolean,
    }

})

module.exports = { User, Leito, Patient }