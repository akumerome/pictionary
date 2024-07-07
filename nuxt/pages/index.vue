<template>
    <div class="pt-8">
    <div class="relative">
        <game-canvas></game-canvas>
        <div class="absolute top-0 w-[515px] h-fit bg-amber-200 p-2 flex flex-col gap-2">
            <div class="flex items-center gap-x-2">
                <game-palette></game-palette>
                <game-eraser></game-eraser>
            </div>
            <game-brush></game-brush>
        </div>

    </div>
</div>

</template>