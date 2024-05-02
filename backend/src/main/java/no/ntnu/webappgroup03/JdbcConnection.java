package no.ntnu.webappgroup03;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

/**
 * A class for handling communication with MySQL database.
 * Code adapted from <a href="https://github.com/strazdinsg/app-dev/blob/main/example-05-jdbc-db-access/src/main/java/no/ntnu/JdbcConnection.java">JdbcConnection</a>"
 */
public class JdbcConnection {

  private Connection connection;

  private JdbcConnection() {
    // Intentionally left blank
  }

  /**
   * Singleton instance of the class.
   */
  private static JdbcConnection instance = new JdbcConnection();

  private static JdbcConnection getInstance() {
    return instance;
  }

  /**
   * Connect to the database.
   *
   * @param host     Host of the database (localhost, Ip address or hostname)
   * @param port     TCP port number (3306)
   * @param database Database name
   * @param user     SQL user
   * @param password SQL user password
   * @throws SQLException If a database access error occurs or the url is null
   */
  public void connect(String host, int port, String database, String user, String password)
      throws SQLException {
    this.connection = DriverManager.getConnection("jdbc:mysql://" + host + ":" + port + "/"
        + database + "?user" + user + "&password=" + password);
  }

  /**
   * Check if connection to the database is established.
   *
   * @return True when connection is established, false otherwise
   */
  public boolean isConnected() {
    return connection != null;
  }

  /**
   * Execute an SQL statement which updates the state of the database.
   *
   * @param query SQL query, with ? in place of arguments
   * @param values LIst of values to replace the ? placeholder in the query
   * @return Number of updated rows
   * @throws SQLException On error.
   */
  private int executeUpdateStatement(String query, String[] values) throws SQLException {
    if (!isConnected()) {
      throw new SQLException("No connection to the database");
    }
    PreparedStatement stmt = prepareStatement(query, values);
    return stmt.executeUpdate();
  }

  /**
   * Prepare a statement for a given query and arguments.
   *
   * @param query SQL query
   * @param args Values to replace the "?" placeholders
   * @return PreparedStatement
   * @throws SQLException Exception on error
   */
  private PreparedStatement prepareStatement(String query, String[] args) throws SQLException {
    PreparedStatement stmt = connection.prepareStatement(query);
    for (int i = 0; i < args.length; ++i) {
      stmt.setString(i + 1, args[i]);
    }
    return stmt;
  }

  /**
   * Execute a query which returns a list of strings (a single-column table).
   *
   * @param query The SQL query.
   * @param values Values to replace the "?" placeholders.
   * @return List of strings, returned as rows from SQL.
   * @throws SQLException Exception on error.
   */
  private List<String> executeStringListSelectQuery(String query, String[] values)
    throws SQLException {
    List<String> responseString = new LinkedList<>();
    PreparedStatement stmt = prepareStatement(query, values);
    ResultSet rs = stmt.executeQuery();
    while (rs.next()) {
      responseString.add(rs.getString(1));
    }
    return responseString;
  }
}
