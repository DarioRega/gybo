import sys
import os
from jelapi import JelasticAPI

CONTAINER = (sys.argv)[1]
ENV = (sys.argv)[2]
JELASTIC_TOKEN = os.getenv('JELASTIC_TOKEN')

japi = JelasticAPI(apiurl='https://app.jpc.infomaniak.com/1.0/', apitoken=JELASTIC_TOKEN)
envs = japi.getEnvsByEnvGroups([ENV, CONTAINER])

if len(envs) < 1:
    raise Exception('Instance {} not found in Jelastic'.format(CONTAINER))

if len(envs) > 1:
    raise Exception('Jelastic returned more than one environment when searching for Instance {}'.format(CONTAINER))

japi.redeployContainersByGroup(envs[0], dockertag=ENV)
