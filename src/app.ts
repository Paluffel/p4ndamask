/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    Actor,
    AnimationEaseCurves,
    AnimationKeyframe,
    AnimationWrapMode,
    ButtonBehavior,
    Context,
    Quaternion,
    TextAnchorLocation,
    Vector3,
    ColliderGeometry,
    Collider,
    User,
    
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    [x: string]: any;
    private text: Actor = null;
    private cube: Actor = null;
    constructor(private context: Context, private baseUrl: string) {
        this.context.onStarted(() => this.started());
    }
    /**
     * Once the context is "started", initialize the app.
     */
    private started() {
        // Create a new actor with no mesh, but some text. This operation is asynchronous, so
        // it returns a "forward" promise (a special promise, as we'll see later).
        const textPromise = Actor.CreateEmpty(this.context, {
            actor: {
                name: 'Text',
                transform: {
                },
                text: {
                    contents: "",
                    anchor: TextAnchorLocation.MiddleCenter,
                    color: { r: 213 / 255, g: 0 / 255, b: 213 / 255 },
                    height: 0
                }
            }
        });

// AltspaceVR resource IDs from https://account.altvr.com/kits/
const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
    resourceId: "artifact: 1268209511420658610",
    actor: {
        name: 'P4ndam4sk 02',
                            transform: {local:{
                                position: { x: 0, y: 0, z: 0 },
                                scale: { x: 0.25, y: 0.25, z: 0.25}
        }}
    }
}));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
       // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
       libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
           if (actor) {
               const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

               // Trigger the grow/shrink animations on hover
               //@ts-ignore
                   buttonBehavior.onClick((user: User) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                    const model = Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1268272832299664334",
                        actor: {
                            name: 'P4ndam4sk2 00',
                            transform: {local:{
                                position: { x: 0, y: -0.025, z: 0.1 },
                                scale: { x: 40, y: 40, z: 40}
                           }}
                     }
                 }).value;
                 model.attach(user, "head");
                   })
                }
            })
        {
                //222222 AltspaceVR resource IDs from https://account.altvr.com/kits/
    const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
       resourceId: "artifact: 1268209511420658610",
    actor: {
        name: 'P4ndam4sk 02',
            transform: {local:{
            position: { x: 0, y: -0.1, z: 6 },
             scale: { x: 0.25, y: 0.25, z: 0.25}
            }}
        }
    }))
        // 2222Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
       // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
       libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
        if (actor) {
            const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

            // 2222222222Trigger the grow/shrink animations on hover
            //@ts-ignore
                buttonBehavior.onClick((user: User) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                 const model = Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1268272824691196875",
                        actor: {
                            name: 'P4ndam4sk2 01',
                            transform: {local:{
                                position: { x: 0, y: -0.025, z: 0.1 },
                                scale: { x: 40, y: 40, z: 40},
                           }}
                  }
              }).value;
              model.attach(user, "head");
                })
             }
         })
        }
        {
                //33333 AltspaceVR resource IDs from https://account.altvr.com/kits/
                const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                    resourceId: "artifact: 989569229617365197",
                    actor: {
                        name: 'Cube',
                        transform: {local:{
                        position: { x: 26, y: 0, z: 3 },
                         scale: { x: 0.8, y: 0.8, z: 0.8}
                        }}
                    }
                }))
        
                   // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
       libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
        if (actor) {
            const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

            // 3333333333Trigger the grow/shrink animations on hover
            //@ts-ignore
                buttonBehavior.onClick((user: User) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                 const model = Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1268898432043451216",
                        actor: {
                            name: 'P4ndaheadphone3',
                            transform: {local:{
                                position: { x: 0, y: -0.025, z: 0.05 },
                                scale: { x: 0.13, y: 0.12, z: 0.12},
                           }}
                  }
              }).value;
              model.attach(user, "head");
                })
             }
         })
 }
        {
                //444444 AltspaceVR resource IDs from https://account.altvr.com/kits/
                const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                    resourceId: "artifact: 989569229617365197",
                    actor: {
                        name: 'Cube',
                        transform: {local:{
                        position: { x: 26, y: 0, z: 3.5 },
                         scale: { x: 0.8, y: 0.8, z: 0.8}
                        }}
                    }
                }))
        
                   // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
       libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
        if (actor) {
            const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

            // 444444Trigger the grow/shrink animations on hover
            //@ts-ignore
                buttonBehavior.onClick((user: User) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                 const model = Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1269016845717865188",
                        actor: {
                            name: 'Headphes 02',
                            transform: {local:{
                                position: { x: 0, y: 0, z: 0.05 },
                                scale: { x: 0.13, y: 0.12, z: 0.12},
                           }}
                  }
              }).value;
              model.attach(user, "head");
                })
             }
         }) 
        }
        {
                //555555 resource IDs from https://account.altvr.com/kits/
                const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                    resourceId: "artifact: 989569229617365197",
                    actor: {
                        name: 'Cube',
                        transform: {local:{
                        position: { x: 26, y: 0, z: 2.5 },
                         scale: { x: 0.8, y: 0.8, z: 0.8}
                        }}
                    }
                }))
        
                   // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
       libraryActors.forEach((actor: MRE.ForwardPromise<MRE.Actor>) => {
        if (actor) {
            const buttonBehavior = actor.value.setBehavior(MRE.ButtonBehavior);

            // 5555555Trigger the grow/shrink animations on hover
            //@ts-ignore
                buttonBehavior.onClick((user: User) => {        const libraryActors: Array<MRE.ForwardPromise<MRE.Actor>> = [];
                 const model = Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1269016858955088614",
                        actor: {
                            name: 'Headphes 01',
                            transform: {local:{
                                position: { x: 0, y: 0, z: 0.05 },
                                scale: { x: 0.13, y: 0.12, z: 0.12},
                           }}
                  }
              }).value;
              model.attach(user, "head");
                })
             }
         })
        }
    }
}
