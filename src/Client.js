import Client from "@sanity/client";

export default Client({
    projectId: "eiiiopmz",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true
});
