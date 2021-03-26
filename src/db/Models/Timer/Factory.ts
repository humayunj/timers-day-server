import Timer, { ITimer } from "./Model";

/**
 *
 * @param {string} name  Creates a new timer with provided name
 * @returns {Promise<ITimer>} Promise which will resolve to timer instance
 */
export async function create(name: string) {
  let timer = new Timer({
    name,
  });
  await timer.save();
  return {
    id: timer._id,
    title: timer.name,
    startTime: timer.createdAt.getMilliseconds(),
  };
}
export function deleteOne(id: ITimer["_id"]) {
  return Timer.deleteOne({ _id: id });
}
export function deleteMany(id: ITimer["_id"]) {
  return Timer.deleteMany({ _id: id });
}

export async function find(query: any = {}) {
  return (await Timer.find(query).exec()).map((t) => ({
    id: t._id,
    title: t.name,
    startTime: t.createdAt.getMilliseconds(),
  }));
}

export async function update(id: string, { title }: { title: string }) {
  await Timer.updateOne(
    { _id: id },
    {
      name: title,
    }
  );
  return (await find({ _id: id }))[0];
}
