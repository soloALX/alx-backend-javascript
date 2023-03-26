import { uploadPhoto, createUser } from './utils';

export default async function asyncUploaderUser() {
  try {
    return { photo: await uploadPhoto(), user: await createUser() };
  } catch (err) {
    return { photo: null, user: null };
  }
}
