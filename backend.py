#!/usr/bin/env python
import numpy as np
import pynbody as pyn
import json
import random

def build_json(sim, ptype='gas', color='rho'):
    pdict = {'vertices':[], 'faces':[], 'colors':[]}
    for i in range(len(sim.g)):
        pdict["vertices"].append(sim.s['x'][i])
        pdict["vertices"].append(sim.s['y'][i])
        pdict["vertices"].append(sim.s['z'][i])
        pdict["colors"].append(np.log10(sim.s['rho'][i]))
    print json.dumps(pdict)

if __name__ == "__main__":
    build_json(pyn.load('/home/kellerbw/tmp/LOW_100G.bin'))
