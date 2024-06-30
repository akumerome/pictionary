<template>
    <h1>PICTIONARY</h1>
    <div class="relative">
        <GameCanvas></GameCanvas>
        <div class="absolute top-0 w-[515px] h-fit bg-amber-200 p-2 flex flex-col gap-2">
            <div class="flex items-center gap-x-2">
                <GamePalette></GamePalette>
                <GameEraser></GameEraser>
            </div>
            <GameBrush></GameBrush>
        </div>

    </div>

</template>