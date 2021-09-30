import { Executor, RequestListTags } from 'cyllid/src/factory/request';

export class StorageInput {

    static getTags() {
        return new Promise((resolve, reject) => {
            Executor.run(new RequestListTags())
                .then(res => resolve(res.data))
                .catch(err => reject(err.response));
        })
    }
}