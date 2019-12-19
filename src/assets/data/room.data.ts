export interface IRoom {
  id: string;
  roomName: string;
  roomDescription: string;
  roomCoordinates: {
    lng: number;
    ltd: number;
  };
  roomCreated: Date;
  roomUpdated: Date;
  roomPictures: {
    url: string;
  }[];
  roomPrice: number;
}

export const AllRoomsData: IRoom[] = [
  {
    id: "123",
    roomName: "Family Room",
    roomDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
    roomCoordinates: {
      lng: 40.988127,
      ltd: 29.039418
    },
    roomCreated: new Date(),
    roomUpdated: new Date(),
    roomPictures: [
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-2.jpg"
      },
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-1.jpg"
      }
    ],
    roomPrice: 300
  },
  {
    id: "324",
    roomName: "King Suite",
    roomDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
    roomCoordinates: {
      lng: 40.988127,
      ltd: 29.039418
    },
    roomCreated: new Date(),
    roomUpdated: new Date(),
    roomPictures: [
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-2.jpg"
      },
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-1.jpg"
      }
    ],
    roomPrice: 480
  },
  {
    id: "154",
    roomName: "Single Room",
    roomDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
    roomCoordinates: {
      lng: 40.988127,
      ltd: 29.039418
    },
    roomCreated: new Date(),
    roomUpdated: new Date(),
    roomPictures: [
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-2.jpg"
      },
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-1.jpg"
      }
    ],
    roomPrice: 180
  },
  {
    id: "567",
    roomName: "Double Room",
    roomDescription:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
    roomCoordinates: {
      lng: 40.988127,
      ltd: 29.039418
    },
    roomCreated: new Date(),
    roomUpdated: new Date(),
    roomPictures: [
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-2.jpg"
      },
      {
        url:
          "http://innvistahotel.com/wp-content/uploads/2016/06/Family-Room-1.jpg"
      }
    ],
    roomPrice: 350
  }
];
