import React from "react";

import Commande from "./Commande";

import "./CommandeList.css";

function CommandeList() {
  const orders = [
    {
      id: 1,
      client_fullname: "ljhg",
      client_phonenumber: "lkhg",
      client_address: "kjhgkjgh",
      articles:
        '[{"id":2,"name":"LA NOCTAMBULE","ingredients":"Crème fraîche, mozzarella, lardons, oignons frais, origan.","image":"noctambule.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":1},{"id":4,"name":"LA PROVENCALE","ingredients":"Tomate, mozzarella, fromage de chèvre, tomates fraîches, huile d’olive, herbes de provence.","image":"provencale.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":2}]',
      total_amount: "27",
      status: null,
      createdAt: "2020-09-01T19:20:02.000Z",
      updatedAt: "2020-09-01T19:20:02.000Z",
    },
    // {
    //   id: 2,
    //   client_fullname: "Yann LE BOSS",
    //   client_phonenumber: "678-524-8038",
    //   client_address: "3170  Hanifan Lane",
    //   articles:
    //     '[{"id":2,"name":"LA NOCTAMBULE","ingredients":"Crème fraîche, mozzarella, lardons, oignons frais, origan.","image":"noctambule.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":4},{"id":1,"name":"LA KEBAB","ingredients":"Sauce yaourt à l’ail, mozzarella, viande kebab, tomates fraîches, oignons frais.","image":"kebab.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":1},{"id":3,"name":"LA POPEYE","ingredients":"Epinard à la crème, mozzarella, chèvre, tomates fraîches, oignons frais, thym, herbes de provence.","image":"popeye.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":2}]',
    //   total_amount: "62",
    //   status: 0,
    //   createdAt: "2020-09-01T19:25:28.000Z",
    //   updatedAt: "2020-09-01T19:25:28.000Z",
    // },
    // {
    //   id: 3,
    //   client_fullname: "Yann LE BOSS",
    //   client_phonenumber: "678-524-8038",
    //   client_address: "3170  Hanifan Lane",
    //   articles:
    //     '[{"id":2,"name":"LA NOCTAMBULE","ingredients":"Crème fraîche, mozzarella, lardons, oignons frais, origan.","image":"noctambule.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":4},{"id":1,"name":"LA KEBAB","ingredients":"Sauce yaourt à l’ail, mozzarella, viande kebab, tomates fraîches, oignons frais.","image":"kebab.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":1},{"id":3,"name":"LA POPEYE","ingredients":"Epinard à la crème, mozzarella, chèvre, tomates fraîches, oignons frais, thym, herbes de provence.","image":"popeye.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":2}]',
    //   total_amount: "62",
    //   status: 0,
    //   createdAt: "2020-09-01T19:25:28.000Z",
    //   updatedAt: "2020-09-01T19:25:28.000Z",
    // },
    // {
    //   id: 4,
    //   client_fullname: "Yann LE BOSS",
    //   client_phonenumber: "678-524-8038",
    //   client_address: "3170  Hanifan Lane",
    //   articles:
    //     '[{"id":2,"name":"LA NOCTAMBULE","ingredients":"Crème fraîche, mozzarella, lardons, oignons frais, origan.","image":"noctambule.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":4},{"id":1,"name":"LA KEBAB","ingredients":"Sauce yaourt à l’ail, mozzarella, viande kebab, tomates fraîches, oignons frais.","image":"kebab.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":1},{"id":3,"name":"LA POPEYE","ingredients":"Epinard à la crème, mozzarella, chèvre, tomates fraîches, oignons frais, thym, herbes de provence.","image":"popeye.png","createdAt":"2020-09-01T16:29:59.000Z","updatedAt":"2020-09-01T16:29:59.000Z","number":2}]',
    //   total_amount: "62",
    //   status: 0,
    //   createdAt: "2020-09-01T19:25:28.000Z",
    //   updatedAt: "2020-09-01T19:25:28.000Z",
    // },
  ];
  return (
    <div className="commande-Screen">
      <h1>COMMANDES EN COURS :</h1>
      <div className="commande-list">
        {orders.map((order) => (
          <Commande key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
export default CommandeList;
