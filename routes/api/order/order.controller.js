const Order = require("./order.model");

function handleError(res, err) {
  return res.send(500, err);
}

exports.index = function(req, res) {
  Order.find()
    .sort("-created_at")
    .populate("_user")
    .populate("_restaurant")
    .populate("_meals")
    .exec(function(err, orders) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, orders);
    });
};

exports.restaurant_index = function(req, res) {
  Order.find({ _restaurant: req.user._id })
    .populate("_user")
    .populate("_restaurant")
    .exec(function(err, orders) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, orders);
    });
};

exports.show = function(req, res) {
  Order.findById(req.params.id)
    .populate("_meals")
    .populate("_user")
    .populate("_restaurant")
    .exec(function(err, order) {
      if (err) {
        return handleError(res, err);
      }

      if (!order) {
        return res.send(404);
      }

      return res.json(order);
    });
};

exports.create = function(req, res) {
  Order.create({ ...req.body, _user: req.user._id }, function(err, order) {
    if (err) {
      return handleError(res, err);
    }

    order.populate();

    return res.json(201, order);
  });
};

exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Order.findById(req.params.id, function(err, order) {
    if (err) {
      return handleError(res, err);
    }
    if (!order) {
      return res.send(404);
    }
    
    const updated = _.merge(order, req.body);
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }

      return res.json(200, order);
    });
  });
};

exports.destroy = function(req, res) {
  Order.findById(req.params.id, function(err, order) {
    if (err) {
      return handleError(res, err);
    }
    if (!order) {
      return res.send(404);
    }
    order.remove(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};