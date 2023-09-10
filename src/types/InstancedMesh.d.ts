import { Camera, Group, Mesh, Object3D, Scene, WebGLRenderer } from "three";
import { BufferGeometry, InstancedMesh as InstancedMeshBase, Material } from "three/index";
import { Cursor, Events, InteractionEvents, Object3DExtPrototype, Tween } from "../index";

export class InstancedMesh<
    TGeometry extends BufferGeometry = BufferGeometry,
    TMaterial extends Material | Material[] = Material | Material[],
> extends InstancedMeshBase<TGeometry, TMaterial> implements Object3DExtPrototype {
    enabled: boolean;
    interceptByRaycaster: boolean;
    hitboxes: Mesh[];
    focusable: boolean;
    draggable: boolean;
    findDropTarget: boolean;
    scene: Scene;
    cursor: Cursor;
    cursorDrag: Cursor;
    cursorDrop: Cursor;
    needsRender: boolean;
    get hovered(): boolean;
    get focused(): boolean;
    get clicking(): boolean;
    get dragging(): boolean;
    get enabledState(): boolean;
    get firstFocusable(): Object3D;
    applyFocus(): void;
    applyBlur(): void;
    on<K extends keyof Events>(type: K | K[], listener: (args?: Events[K]) => void): (args?: Events[K]) => void;
    hasEvent<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): boolean;
    off<K extends keyof Events>(type: K, listener: (args?: Events[K]) => void): void;
    trigger<K extends keyof Events>(type: K, args?: Events[K]): void;
    triggerAncestor<K extends keyof InteractionEvents>(type: K, args?: InteractionEvents[K]): void;
    setManualDetectionMode(): void;
    detectChanges(recursive?: boolean): void;
    bindProperty<T extends keyof this>(property: T, getCallback: () => this[T], renderOnChange?: boolean): this;
    unbindProperty<T extends keyof this>(property: T): this;
    tween(): Tween<InstancedMesh>;
    override parent: Object3D;
    override children: Object3D[];
    override add(...object: Object3D[]): this;
    override remove(...object: Object3D[]): this;
    override attach(object: Object3D): this;
    override traverse(callback: (object: Object3D) => any): void;
    override traverseAncestors(callback: (object: Object3D) => any): void;
    override traverseVisible(callback: (object: Object3D) => any): void;
    override getObjectById(id: number): Object3D;
    override getObjectByName(name: string): Object3D;
    override getObjectByProperty(name: string, value: any): Object3D;
    override getObjectsByProperty(name: string, value: any): Object3D[];
    override onBeforeRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void;
    override onAfterRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void;
}
