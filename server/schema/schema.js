const graphql = require("graphql");
const _ = require("lodash");
const Jeans = require("../model/jeans");
const Tshirt = require("../model/tshirt");
const Sunglasses = require("../model/sunglass");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} = graphql;

const JeansType = new GraphQLObjectType({
  name: "jeans",
  fields: () => ({
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    type: { type: GraphQLString },
    id: { type: GraphQLID }
  })
});

const TShirtType = new GraphQLObjectType({
  name: "tshirt",
  fields: () => ({
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    type: { type: GraphQLString },
    id: { type: GraphQLID }
  })
});

const SunglassesType = new GraphQLObjectType({
  name: "sunglasses",
  fields: () => ({
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    type: { type: GraphQLString },
    id: { type: GraphQLID }
  })
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    jeans: {
      type: new GraphQLList(JeansType),
      resolve() {
        return Jeans.find({});
      }
    },
    tshirt: {
      type: new GraphQLList(TShirtType),
      resolve() {
        return Tshirt.find({});
      }
    },
    sunglasses: {
      type: new GraphQLList(SunglassesType),
      resolve() {
        return Sunglasses.find({});
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addJeans: {
      type: JeansType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        color: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let jeans = new Jeans({
          name: args.name,
          type: args.type,
          color: args.color
        });
        return jeans.save();
      }
    },
    addTshirt: {
      type: TShirtType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        color: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let tshirt = new Tshirt({
          name: args.name,
          type: args.type,
          color: args.color
        });
        return tshirt.save();
      }
    },
    addGlasses: {
      type: SunglassesType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        color: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let sunglasses = new Sunglasses({
          name: args.name,
          type: args.type,
          color: args.color
        });
        return sunglasses.save();
      }
    },
    deleteJeans: {
      type: JeansType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const removedJeans = Jeans.findByIdAndDelete(args.id).exec();
        if (!removedJeans) {
          throw new Error("Error");
        }
        return removedJeans;
      }
    },
    deleteTshirt: {
      type: TShirtType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const removedTshirt = Tshirt.findByIdAndDelete(args.id).exec();
        if (!removedTshirt) {
          throw new Error("Error");
        }
        return removedTshirt;
      }
    },
    deleteSunglasses: {
      type: SunglassesType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const removedSunglass = Sunglasses.findByIdAndDelete(args.id).exec();
        if (!removedSunglass) {
          throw new Error("Error");
        }
        return removedSunglass;
      }
    },
    updateJeans: {
      type: JeansType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        type: {
          type: new GraphQLNonNull(GraphQLString)
        },
        color: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        return Jeans.findByIdAndUpdate(args.id, {
          $set: { name: args.name, type: args.type, color: args.color }
        }).catch(err => new Error(err));
      }
    },

    updateTshirt: {
      type: TShirtType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        type: {
          type: new GraphQLNonNull(GraphQLString)
        },
        color: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        return Tshirt.findByIdAndUpdate(args.id, {
          $set: { name: args.name, type: args.type, color: args.color }
        }).catch(err => new Error(err));
      }
    },

    updateSunglasses: {
      type: SunglassesType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        type: {
          type: new GraphQLNonNull(GraphQLString)
        },
        color: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        return Sunglasses.findByIdAndUpdate(args.id, {
          $set: { name: args.name, type: args.type, color: args.color }
        }).catch(err => new Error(err));
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation
});
