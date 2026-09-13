export function CPU_ROUTER(msg) {
    const text = String(msg || "");

    // GPU
    if (text.startsWith("GPU-")) {
        return {
            sys: "GPU",
            num: text,
            evo: "bereit",
            flex: true,
            cube: 81
        };
    }

    // CPU
    if (text.startsWith("CPU-")) {
        return {
            sys: "CPU",
            num: text,
            evo: "bereit",
            flex: true,
            cube: 81
        };
    }

    // RAM
    if (text.startsWith("RAM-")) {
        return {
            sys: "RAM",
            num: text,
            evo: "bereit",
            flex: true,
            cube: 81
        };
    }

    // ROM
    if (text.startsWith("ROM-")) {
        return {
            sys: "ROM",
            num: text,
            evo: "bereit",
            flex: true,
            cube: 81
        };
    }

    // Fehler
    return {
        sys: "AUA",
        num: 99,
        evo: "block",
        flex: false,
        cube: 0
    };
}
