import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[1fr_48px] border border-primary-800 min-768:grid-rows-[1fr_48px] min-1280:flex">
      <div className="relative row-span-2 h-0 w-0 min-640:aspect-square min-640:h-auto min-640:w-auto min-1280:h-32">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="border-r border-primary-800 object-cover"
        />
      </div>

      <div className="col-span-2 flex flex-grow flex-col gap-2 px-4 py-2 min-640:gap-4 min-768:px-6 min-768:py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex h-7 items-center rounded-sm bg-yellow-800 px-3 text-xs font-bold uppercase text-yellow-200">
              past
            </span>
          ) : (
            <span className="flex h-7 items-center rounded-sm bg-green-800 px-3 text-xs font-bold uppercase text-green-200">
              upcoming
            </span>
          )}
        </div>

        {/* Desktop / Tablet visible from min-768*/}
        <p className="hidden text-lg text-primary-300 min-768:block">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        {/* Mobile visible until 768 */}
        <p className="text-lg text-primary-300 min-768:hidden">
          {format(new Date(startDate), "dd/MM/yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "dd/MM/yyyy")}
        </p>

        <div className="mt-auto flex flex-col items-start gap-2 min-640:gap-4 min-768:flex-row min-768:items-baseline">
          <div className="flex gap-5">
            <p className="text-xl font-semibold text-accent-400">
              ${totalPrice}
            </p>
            <div className="flex gap-1">
              <p className="text-primary-300">&bull;</p>
              <p className="text-lg text-primary-300">
                {numGuests} guest{numGuests > 1 && "s"}
              </p>
            </div>
          </div>

          {/* Desktop / Tablet visible from min-768 */}
          <p className="ml-auto hidden text-sm text-primary-400 min-768:block">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>

          {/* Mobile visible until 768 */}
          <p className="text-sm text-primary-400 min-768:hidden">
            Booked {format(new Date(created_at), "dd/MM/yyyy")}
          </p>
        </div>
      </div>

      <div className="col-span-2 flex border-t border-primary-800 min-1280:w-[100px] min-1280:flex-col min-1280:border-l">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex flex-grow items-center gap-2 border-primary-800 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900 min-1280:border-b"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
