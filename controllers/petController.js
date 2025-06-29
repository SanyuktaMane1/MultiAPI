const Pet = require("../models/pet");

exports.createPet = async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPets = async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
};

exports.getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePet = async (req, res) => {
  try {
    const updated = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: "Pet deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.buyPet = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet || !pet.isAvailable) {
      return res.status(400).json({ message: "Pet not available" });
    }
    pet.isAvailable = false;
    pet.soldTo = req.body.customerName;
    await pet.save();
    res.json({ message: `Cat bought by ${req.body.customerName}` });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
