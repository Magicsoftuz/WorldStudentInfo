const getAll = async (req, res, Model) => {
  const datas = await Model.find();

  res.status(200).json({
    status: "Success",
    results: datas.length,
    data: datas,
  });
};

const getOne = async (req, res, Model) => {
  const data = await Model.findById(req.params.id);

  res.status(200).json({
    status: "Success",
    data: data,
  });
};

const add = async (req, res, Model) => {
  const data = await Model.create(req.body);

  res.status(201).json({
    status: "Success",
    data: data,
  });
};

const update = async (req, res, Model) => {
  const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: "success",
    data: data,
  });
};

const deleteData = async (req, res, Model) => {
  const data = await Model.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
};

module.exports = { getAll, getOne, add, update, deleteData };
