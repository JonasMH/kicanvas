/*
    Copyright (c) 2022 Alethea Katherine Flowers.
    Published under the standard MIT License.
    Full text available at: https://opensource.org/licenses/MIT
*/
declare var DEBUG: boolean | undefined;

if (typeof DEBUG !== "undefined" && DEBUG) {
    new EventSource("/esbuild").addEventListener("change", () =>
        location.reload(),
    );
}
