class ObjectStorage {
    constructor(UUID, tags, data) {
        this.UUID = UUID;
        this.tags = tags;
        this.data = data;
    }
    getUUID() {
        return this.UUID;
    }
    getItems() {
        const ans =
            "UUID: " +
            this.UUID +
            "\n" +
            "Tags:[ " +
            this.tags +
            " ]" +
            "\n" +
            "Data: " +
            this.data;
        return ans;
    }
}
module.exports = ObjectStorage