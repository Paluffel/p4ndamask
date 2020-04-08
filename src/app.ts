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
    Vector3
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    private text: Actor = null;
    private cube: Actor = null;
    user: any;

    constructor(private context: Context, private baseUrl: string) {
        this.context.onStarted(() => this.started());
    }

    /**
     * Once the context is "started", initialize the app.
     */
    private started() {
        // Create a new actor with no mesh, but some text.
        this.text = Actor.CreateEmpty(this.context, {
            actor: {
                name: 'Test',
                transform: {
                    app: { position: { x: 0, y: 0.5, z: 0 } }
                },
                text: {
                    contents: "Click me and wear me its that easy ",
                    anchor: TextAnchorLocation.MiddleCenter,
                    color: { r: 30 / 255, g: 206 / 255, b: 213 / 255 },
                    height: 0.3
                }
            }
        });
// AltspaceVR resource IDs from https://account.altvr.com/kits/
const libraryActors: MRE.Actor[] = [];
libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
    resourceId: "artifact: 1268272832299664334",
    actor: {
        name: 'P4ndam4sk2 00',
                            transform: {local:{
                                position: { x: 0, y: 0, z: 0 },
                                scale: { x: 40, y: 40, z: 40}
        }}
    }
}));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
       // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
       libraryActors.forEach((actor: MRE.Actor) => {
        if (actor) {
            const buttonBehavior = actor.setBehavior(MRE.ButtonBehavior);

               // Trigger the grow/shrink animations on hover
               //@ts-ignore
                   buttonBehavior.onClick((user: User) => {        const libraryActors: MRE.Actor[] = [];
                    const model = Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1268272832299664334",
                        actor: {
                            name: 'P4ndam4sk2 00',
                            transform: {local:{
                                position: { x: 0, y: -0.025, z: 0.1 },
                                scale: { x: 40, y: 40, z: 40}
                           }}
                     }
                 })
                 model.attach(user, "head");
                   })
                }
            })
	}
}
