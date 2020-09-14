import React from "react";
import { Link } from "gatsby";

const LinkElement = ({ hashRoute, ...props }) =>
  hashRoute ? (
    <a href={`#${props.to}`} className={props.className}>
      {props.children}
    </a>
  ) : (
    <Link to={props.to} className={props.className}>
      {props.children}
    </Link>
  );

function ListItems({
  item,
  hashRoute = false,
  index,
  image = true,
  author = true,
  categories = false,
  excerpt = false,
  orientation = "horizontal",
  className = "p-6 border-gray-200",
  imageSize = "w-full h-40",
}) {
  return (
    <article
      className={`flex flex-col leading-tight border-b last:border-b-0 ${className}`}
    >
      <LinkElement
        hashRoute={hashRoute}
        to={`/posts/${item.slug}`}
        className={`w-full flex ${orientation} no-underline hover:no-underline`}
      >
        {image && (
          <div
            className={`flex ${imageSize} justify-start items-start pr-4 py-2`}
          >
            {item.medium && (
              <img
                alt={item.medium.alt_text}
                src={item.medium.url.replace(/^"(.*)"$/, '$1')}
                className="h-full w-full object-cover rounded"
              />
            )}
          </div>
        )}
        <div className="w-full flex flex-col">
          {categories && (
            <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
              {item.categories && item.categories.length > 0
                ? item.categories[0].name
                : ""}
            </p>
          )}
          <div
            id={`nav-${index}`}
            className={"w-full font-bold font-sans text-lg text-gray-800"}
          >
            {item.title}
          </div>
          {excerpt && (
            <p className="text-gray-800 font-sans text-base pt-2">
              {item.excerpt}
            </p>
          )}
          {author && (
            <div className="flex mt-auto pt-2">
              <div
                className={`flex flex-col w-full ${orientation} justify-between items-start`}
              >
                <div className="flex flex-row flex-wrap">
                  {item.users &&
                    item.users.map((user, index, arr) => (
                      <Link
                        to={`/author/${user.id}`}
                        className="text-gray-600 text-xs md:text-sm mr-2 normal-case"
                      >
                        {user.first_name + " " + user.last_name}
                        {arr.length - index > 1 && ","}
                      </Link>
                    ))}
                </div>
                <p className="text-gray-600 text-xs md:text-sm">
                  {item.created_date}
                </p>
              </div>
            </div>
          )}
        </div>
      </LinkElement>
    </article>
  );
}

export default ListItems;
